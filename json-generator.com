json-generator.com
[
  '{{repeat(15, 20)}}',
  {
    id: '{{index()+7}}',
    name: '{{lorem(5, "words")}}',
    author: '{{random("Freddy Marketer","Charles Granville","Freddy Marketer","Willian Fernan","Martin CHikilian","Dion Argüelles","Judith Francis")}}',
    category: '{{random("X-Plosion Expansion", "X-Plosion Products")}}',
    published: '{{integer(1325376000, 1388534400)}}',
    featured: '{{random(\'assets/images/blog-feat-img.jpg\', \'assets/images/blog-feat-img-2.jpg\')}}',
    thumb: '{{random(\'assets/images/japan-bottle-thumb.png\', \'assets/images/flavor-bottle-thumb.png\', \'assets/images/xplosion-bottle-thumb.png\', \'assets/images/danish-businessman-thumb.png\')}}',
    comments: [
    '{{repeat(4, 7)}}',{
      name:'{{firstName()}}',
      email:'{{email([random])}}',
      thumb:'{{random(\'assets/images/user-fumihiro.jpg\', \'assets/images/user-seiko.jpg\')}}',
      date: '{{integer(1325376000, 1388534400)}}',
      comment: '{{lorem(20, "words")}}'
    }
    ]
  }
]