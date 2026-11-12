/* 本次范围的题目已逐项对照教材；历史首轮记录保留在原数据文件。 */
(() => {
  const scope=/^(?:2\.(?:1|2|3|total)|3\.(?:1|2|3|4|5|total)|4\.1):/;
  for(const [id,q] of Object.entries(window.REVIEW_SOLUTIONS||{})) {
    if(!scope.test(id)) continue;
    q.verification='已逐题对照教材题面并复核解答及本题练习；全站练习对照与考点覆盖仍在检查。';
    for(const field of ['solutionSource','guidance']) {
      if(typeof q[field]!=='string') continue;
      q[field]=q[field]
        .replaceAll('第五版答案资料','文件名标注第五版的答案资料（扫描件封面版次未独立确认）')
        .replaceAll('五版答案资料','文件名标注第五版的答案资料（扫描件封面版次未独立确认）')
        .replaceAll('第五版答案','文件名标注第五版的答案资料（扫描件封面版次未独立确认）')
        .replaceAll('五版答案','文件名标注第五版的答案资料（扫描件封面版次未独立确认）')
        .replaceAll('参考《教材习题详解》上册第五版','参考文件名标注第五版的《教材习题详解》上册（扫描件封面版次未独立确认）');
    }
  }
})();
