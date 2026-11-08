(() => {
  'use strict';
  const content = document.getElementById('content');
  const nav = document.getElementById('nav');
  const solutions = window.REVIEW_SOLUTIONS || {};
  const notes = window.REVIEW_NOTES || {};
  const guides = window.REVIEW_GUIDES || {};
  const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const storageKey = 'math-analysis-review-marks-v1';
  const starStorageKey = 'math-analysis-review-stars-v1';
  const sectionStorageKey = 'math-analysis-review-sections-v1';
  let inventory = null;
  let marks = {};
  let stars = {};
  let reviewedSections = {};
  const directoryOnly = [
    ['4.2',4,'连续函数的性质',73],['4.3',4,'初等函数的连续性',82],
    ['5.1',5,'导数的概念',87],['5.2',5,'求导法则',94],
    ['5.3',5,'参变量函数的导数',102],['5.4',5,'高阶导数',104],
    ['5.5',5,'微分',109]
  ];
  let storageAvailable = true;
  try { marks = JSON.parse(localStorage.getItem(storageKey) || '{}') || {}; }
  catch (_) { storageAvailable = false; }
  try { stars = JSON.parse(localStorage.getItem(starStorageKey) || '{}') || {}; }
  catch (_) { storageAvailable = false; }
  try { reviewedSections = JSON.parse(localStorage.getItem(sectionStorageKey) || '{}') || {}; }
  catch (_) { storageAvailable = false; }
  function saveMark() {
    try { localStorage.setItem(storageKey, JSON.stringify(marks)); }
    catch (_) { storageAvailable = false; }
  }
  function saveLocal(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (_) { storageAvailable = false; }
  }
  function go(id) {
    if (location.hash === '#' + id) render();
    else location.hash = id;
    window.scrollTo(0, 0);
  }
  function navHtml(current) {
    let html = '<div class="nav-group"><button class="nav-button" data-go="home" ' + (current==='home'?'aria-current="page"':'') + '>复习总览</button>' +
      '<button class="nav-button" data-go="stars" aria-label="星号收藏夹" ' + (current==='stars'?'aria-current="page"':'') + '>⭐</button></div>';
    for (const chapter of [2,3,4,5]) {
      html += '<div class="nav-group"><div class="nav-title">第 ' + chapter + ' 章</div>';
      for (const s of inventory.sections.filter(x => x.chapter === chapter)) {
        const title = s.id.endsWith('.total') ? '总练习题' : s.id + ' ' + s.title;
        html += '<button class="nav-button" data-go="' + esc(s.id) + '" ' + (current===s.id?'aria-current="page"':'') + '>' + esc(title) + '</button>';
      }
      html += '</div>';
    }
    return html;
  }
  function hero(title, description, index) {
    return '<div class="hero"><div><h1>' + esc(title) + '</h1><p>' + esc(description) + '</p></div><div class="hero-index" aria-hidden="true">' + esc(index || '') + '</div></div>';
  }
  function heading(title, small) {
    return '<div class="section-title"><h2>' + esc(title) + '</h2>' + (small?'<small>'+esc(small)+'</small>':'') + '</div>';
  }
  function guideHtml(id) {
    const guide = guides[id];
    if (!guide) return '';
    let html = heading('知识对照与记忆') + '<div class="panel"><p class="source">'+esc(guide.location)+'</p><div class="table-scroll"><table class="study-table"><thead><tr>'+
      guide.headers.map(x=>'<th scope="col">'+esc(x)+'</th>').join('')+'</tr></thead><tbody>'+
      guide.rows.map(row=>'<tr>'+row.map((cell,i)=>i===0?'<th scope="row">'+esc(cell)+'</th>':'<td>'+esc(cell)+'</td>').join('')+'</tr>').join('')+
      '</tbody></table></div>';
    for (const cue of guide.cues) html+='<p><strong>'+esc(cue.phrase)+'</strong><br>'+esc(cue.explanation)+'</p><p class="source">'+esc(cue.location)+'</p>';
    return html+'</div>';
  }
  function home() {
    const ex = inventory.sections.reduce((n,s) => n+s.numbered_examples,0);
    const qs = inventory.sections.reduce((n,s) => n+s.exercise_questions,0);
    const complete = Object.keys(solutions).length;
    const chapterNames = {'2':'数列极限','3':'函数极限','4':'函数的连续性','5':'导数和微分'};
    return hero('从定义出发，稳稳复习', '按华师大教材章节学习；先尝试，再展开题解与思路。', '∑') +
      '<div class="notice"><strong>制作中：</strong>第二章至第五章首轮清单包含 ' + ex + ' 道编号例题、' + qs + ' 道习题及总练习大题；目前共 ' + complete + ' 道题完成首轮整理。清单、未编号要求和答案对应仍待复核，未整理题目不能视为已有题解。</div>' +
      heading('按章节开始','教材印刷页与 PDF 页分别标注') +
      '<div class="overview">' + [2,3,4,5].map(n => '<button class="tile" data-go="chapter' + n + '"><strong>第 ' + n + ' 章 · ' + chapterNames[n] + '</strong><small>包括本章各节与总练习题</small></button>').join('') + '</div>' +
      heading('使用说明') + '<div class="panel"><p>题目按例题、课后习题和章末总练习排列。已整理的题目可分别展开常规解答、考场书写版、思路引导与举一反三。</p><p>复习标记、星号收藏与小节复习状态保存在当前浏览器，不同浏览器、网址和设备不会自动同步。章节导图与其余题解正在制作。</p></div>';
  }
  function chapterPage(chapter) {
    const sections = inventory.sections.filter(s=>s.chapter===chapter);
    const name = {2:'数列极限',3:'函数极限',4:'函数的连续性',5:'导数和微分'}[chapter];
    return hero('第 ' + chapter + ' 章 · ' + name, '按小节与章末总练习查找题目。', String(chapter)) +
      '<div class="notice">章节思维导图尚未完成；题目与解答正在逐项整理。</div>' +
      heading('小节与题目') + '<div class="overview">' + sections.map(s=>'<button class="tile" data-go="'+esc(s.id)+'"><strong>'+esc(s.id.endsWith('.total')?s.title:s.id+' '+s.title)+'</strong><small>'+(s.pending_inventory?'印刷第 '+s.printed_pages[0]+' 页起 · 例题、习题清单待逐页核对':'编号例题 '+s.numbered_examples+' · 习题大题 '+s.exercise_questions+' · 印刷页 '+s.printed_pages.join('—'))+'</small></button>').join('') + '</div>';
  }
  function sourceText(q) {
    let text = q.reference_match || '参考答案待对照';
    if (q.answer_printed_pages) text += '；答案资料 ' + q.answer_section + ' 第 ' + q.answer_question_number + ' 题，印刷页 ' + q.answer_printed_pages.join('—') + '，PDF 页 ' + q.answer_pdf_pages.join('—');
    if (q.reference_note) text += '；' + q.reference_note;
    if (q.cross_section_reference) text += '；' + q.cross_section_reference;
    return text;
  }
  function label(q) { return q.kind === 'example' ? '例 ' + q.number : '第 ' + q.number + ' 题'; }
  function markButtons(id) {
    return '<div class="controls" aria-label="复习标记"><button class="btn" data-mark="mastered" data-id="'+esc(id)+'" aria-pressed="'+(marks[id]==='mastered')+'">已掌握</button><button class="btn" data-mark="review" data-id="'+esc(id)+'" aria-pressed="'+(marks[id]==='review')+'">待复习</button>'+starButton(id)+'</div>';
  }
  function starButton(id) {
    const selected=!!stars[id];
    return '<button class="btn star-btn" data-star="'+esc(id)+'" aria-pressed="'+selected+'" aria-label="'+(selected?'取消星号收藏':'加入星号收藏')+'">'+(selected?'★ 已收藏':'☆ 收藏')+'</button>';
  }
  function starsPage() {
    const items=[];
    for (const s of inventory.sections) for (const q of s.items) {
      if(stars[q.id]) items.push({q,s});
    }
    return hero('⭐', '星号收藏夹：在题目上点“收藏”即可加入。收藏仅保存在当前浏览器。', '★') +
      (items.length ? '<p class="source">已收藏 '+items.length+' 道题；取消收藏后会从此处移除。</p>'+items.map(({q,s})=>card(q,s)).join('') :
        '<div class="panel"><p>还没有收藏的题目。进入小节后，点击题目右侧的“☆ 收藏”。</p></div>');
  }
  function detail(title,text) {
    return '<details><summary>'+esc(title)+'</summary><div class="answer math-block">'+esc(text)+'</div></details>';
  }
  function card(q,s) {
    const worked=solutions[q.id];
    const parts=q.numbered_parts.length?'编号小问：'+q.numbered_parts.join('、'):'未编号的题内要求待细核';
    const location='华师大第六版上册 · '+s.id+' · 印刷第 '+q.printed_page+' 页起 · PDF 第 '+q.pdf_page+' 页';
    if (!worked) {
      return '<article class="question pending" id="'+esc(q.id)+'"><div class="qhead"><div><div class="qnum">'+esc(location)+'</div><h3>'+esc(label(q))+'</h3><div class="meta">'+esc(parts)+(q.after_printed_divider?' · 原书分隔线后':'')+'</div><span class="tag pending-label">题面与题解待整理</span></div><div class="controls">'+starButton(q.id)+'</div></div><p class="source">'+esc(sourceText(q))+'</p></article>';
    }
    return '<article class="question" id="'+esc(q.id)+'"><div class="qhead"><div><div class="qnum">'+esc(location)+'</div><h3>'+esc(label(q))+'</h3><div class="meta"><span class="tag">'+esc(worked.focus)+'</span></div></div>'+markButtons(q.id)+'</div>' +
      '<div class="statement math-block">'+esc(worked.statement)+'</div>' +
      '<p class="source">知识对照：'+esc(worked.reference)+'</p>' +
      detail('常规解答',worked.solution) + (worked.chenSolution ? detail('陈纪修版对应讲解', worked.chenSource + '\n\n' + worked.chenSolution) : '') + (worked.type==='judgement'||q.question_type==='judgement'?'':detail('考场书写版',worked.exam)) + detail('思路引导',worked.guidance) +
      (worked.variant && !worked.otherHomework ? '<details><summary>举一反三</summary><div class="answer"><p class="source">'+esc(worked.variantSource)+'</p><div class="statement math-block">'+esc(worked.variant)+'</div>'+detail('查看练习解答',worked.variantSolution)+'</div></details>' : '') +
      '<p class="source">'+esc(worked.solutionSource)+'</p><p class="source">'+esc(worked.verification)+'</p></article>';
  }
  function sectionPage(s) {
    const examples=s.items.filter(q=>q.kind==='example');
    const exercises=s.items.filter(q=>q.kind==='exercise');
    const done=s.items.filter(q=>solutions[q.id]).length;
    const title=s.id.endsWith('.total')?s.title:s.id+' '+s.title;
    const desc='华师大第六版上册 · 印刷第 '+s.printed_pages.join('—')+' 页'+(s.pending_inventory?'起':'')+'（PDF 第 '+s.pdf_pages.join('—')+' 页'+(s.pending_inventory?'起':'')+'）';
    let html=hero(title,desc,s.id.endsWith('.total')?'':s.id);
    html+='<div class="section-review"><button class="btn" data-section-review="'+esc(s.id)+'" aria-pressed="'+!!reviewedSections[s.id]+'">'+(reviewedSections[s.id]?'✓ 本小节已复习':'标记本小节已复习')+'</button><span>仅记录小节复习状态，不改变题目的掌握标记。</span></div>';
    html+=s.pending_inventory
      ? '<div class="notice"><strong>题目清单待整理：</strong>已核对教材目录和本节起始页，例题、习题数量和题目尚未逐页清点。</div>'
      : '<div class="notice"><strong>整理进度：</strong>本部分 '+s.numbered_examples+' 道编号例题、'+s.exercise_questions+' 道习题大题；'+done+' 道已做首轮整理。清单与答案来源仍在复核，横线标记保留原书排版，不代表删题。</div>';
    html+=heading('本节提醒')+'<div class="panel">'+esc(notes[s.id]||'本节提醒尚未整理。请先以华师大原书的定义、定理和例题为准。')+'</div>';
    html+=guideHtml(s.id);
    if(examples.length) html+=heading('教材例题','保留原书例题编号')+examples.map(q=>card(q,s)).join('');
    if(exercises.length) html+=heading(s.id.endsWith('.total')?'章末总练习':'课后习题','保留原书题号与小问')+exercises.map(q=>card(q,s)).join('');
    return html;
  }
  function render() {
    if(!inventory) return;
    const id=decodeURIComponent(location.hash.slice(1)||'home');
    nav.innerHTML=navHtml(id);
    const found=inventory.sections.find(s=>s.id===id);
    content.innerHTML=found?sectionPage(found):id==='stars'?starsPage():/^chapter[2345]$/.test(id)?chapterPage(Number(id.slice(-1))):home();
    if(!storageAvailable) content.insertAdjacentHTML('afterbegin','<div class="notice">当前浏览器无法保存复习标记，请检查本地存储设置。</div>');
    if(typeof renderMathInElement==='function') renderMathInElement(content,{delimiters:[{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false}],throwOnError:false});
  }
  document.addEventListener('click', event => {
    const button=event.target.closest('button');
    if(!button) return;
    if(button.dataset.go) go(button.dataset.go);
    if(button.dataset.star) {
      const id=button.dataset.star;
      if(stars[id]) delete stars[id]; else stars[id]=true;
      saveLocal(starStorageKey,stars);
      if(location.hash==='#stars') render();
      else {
        button.setAttribute('aria-pressed',String(!!stars[id]));
        button.setAttribute('aria-label',stars[id]?'取消星号收藏':'加入星号收藏');
        button.textContent=stars[id]?'★ 已收藏':'☆ 收藏';
        if(!storageAvailable) render();
      }
    }
    if(button.dataset.sectionReview) {
      const id=button.dataset.sectionReview;
      if(reviewedSections[id]) delete reviewedSections[id]; else reviewedSections[id]=true;
      saveLocal(sectionStorageKey,reviewedSections);
      button.setAttribute('aria-pressed',String(!!reviewedSections[id]));
      button.textContent=reviewedSections[id]?'✓ 本小节已复习':'标记本小节已复习';
      if(!storageAvailable) render();
    }
    if(button.dataset.mark) {
      const id=button.dataset.id;
      marks[id]=marks[id]===button.dataset.mark?null:button.dataset.mark;
      saveMark();
      button.parentElement.querySelectorAll('[data-mark]').forEach(b=>b.setAttribute('aria-pressed',String(marks[id]===b.dataset.mark)));
      if(!storageAvailable) render();
    }
  });
  window.addEventListener('hashchange',render);
  fetch('inventory.json',{cache:'no-store'}).then(r=>{if(!r.ok) throw Error('HTTP '+r.status); return r.json();})
    .then(data=>{
      inventory=data;
      for (const [id,chapter,title,page] of directoryOnly) {
        if (!inventory.sections.some(s=>s.id===id)) inventory.sections.push({
          id,chapter,title,printed_pages:[page],pdf_pages:[page+13],
          numbered_examples:null,exercise_questions:null,items:[],pending_inventory:true
        });
      }
      render();
    })
    .catch(()=>{content.innerHTML='<div class="notice">无法读取本地题目清单。请用项目中的启动脚本打开网站，再刷新页面。</div>';});
})();
