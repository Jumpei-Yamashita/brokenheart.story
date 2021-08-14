'use strict';

{
    //  scene 1
    const names = ['ルイージは', '純平は', '太郎は'];
    const now =['ここ最近、', 'このところずっと、', '最近はずっと、'];
    const adv = ['驚くほど', 'ものすごい勢いで', '自分でも呆れるぐらい'];
    const feeling = ['恋をしている。', '片想いをしている。', '思いを寄せている人がいる。'];

    //  scene 2
    const conj = ['そこで、', 'いてもたってもいられなくて、'];
    const adv2 = ['勇気をふり絞って', '思い切って', '覚悟を決めて'];
    const names2 = ['意中の相手に', 'その子に', '片想い相手に'];
    const action = ['告白をした。', '思いを打ち明けた。', '好きですと伝えた。'];

    //  scene 3
    const conj2 = ['けれども、', 'だが、', 'しかし、'];
    const response = ['あっさりとふられてしまった。', '断られてしまった。', 'いやがられてしまった。', 'そもそも顔を認識されていなかった。'];

    //  scene 4
    const feeling2 = ['ため息をつきながら、', '悲しみの涙を流しながら、', '悲しみに打ちひしがれながら、'];
    const life = ['毎日を送っている。', '傷心の日々を過ごしている。', '何とか毎日を生きている。'];

    btn.addEventListener('click', () => { 
      const rand1 = Math.floor(Math.random() * names.length);
      const rand2 = Math.floor(Math.random() * now.length);
      const rand3 = Math.floor(Math.random() * adv.length);
      const rand4 = Math.floor(Math.random() * feeling.length);
      const rand5 = Math.floor(Math.random() * conj.length);
      const rand6 = Math.floor(Math.random() * adv2.length);
      const rand7 = Math.floor(Math.random() * names2.length);
      const rand8 = Math.floor(Math.random() * action.length);
      const rand9 = Math.floor(Math.random() * conj2.length);
      const rand10 = Math.floor(Math.random() * response.length);
      const rand11 = Math.floor(Math.random() * feeling2.length);
      const rand12 = Math.floor(Math.random() * life.length);

      const man = names[rand1];
      const woman = names2[rand7];  

      const line1 = names[rand1] + now[rand2] + adv[rand3] + feeling[rand4];
      const line2 = conj[rand5] + man + adv2[rand6] + woman + action[rand8];
      const line3 = conj2[rand9] + woman + 'は' + response[rand10];
      const line4 = man + feeling2[rand11] + life[rand12];
      document.getElementById('line1').textContent = line1;
      document.getElementById('line2').textContent = line2;
      document.getElementById('line3').textContent = line3;
      document.getElementById('line4').textContent = line4;
    });

}