---
layout: default
title: About
permalink: /about/
---

# 这个社团应该关于逻辑吧

<img id="jibba-img" src="https://ph-ormula.github.io/easter-eggs/Jibba.png" alt="" style="width:85%" />

<script>
(function() {
var imgs = [
{ src: 'https://ph-ormula.github.io/easter-eggs/Jibba.png', weight: 197 },
{ src: 'https://ph-ormula.github.io/easter-eggs/Jibba2.png', weight: 197 },
{ src: 'https://ph-ormula.github.io/easter-eggs/Jibba3.png', weight: 197 },
{ src: 'https://ph-ormula.github.io/easter-eggs/Jibba4.jpg', weight: 6 },
{ src: 'https://ph-ormula.github.io/easter-eggs/Jibba%F0%9D%9C%8B.png', weight: 3 }
];
var totalWeight = 0;
for (var i = 0; i < imgs.length; i++) {
totalWeight += imgs[i].weight;
}
var pick = imgs[0].src;
var random = Math.random() * totalWeight;
for (var i = 0; i < imgs.length; i++) {
random -= imgs[i].weight;
if (random < 0) {
pick = imgs[i].src;
break;
}
}
var el = document.getElementById('jibba-img');
if (el) el.src = pick;
console.log("正在随机把一张 wzq 的图片选择出来")
})();
</script>
