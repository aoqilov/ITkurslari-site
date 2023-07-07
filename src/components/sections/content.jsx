import React from "react";
import svgeye from "assets/imgbox/svg/eye.svg";
import svgthu from "assets/imgbox/svg/thumbs-up.svg";
import svgbook from "assets/imgbox/svg/open-book 1.svg";
import svgclock from "assets/imgbox/svg/clock.svg";
//
import svgSoc1 from "assets/imgbox/svg/sface.svg";
import svgSoc2 from "assets/imgbox/svg/slink.svg";
import svgSoc3 from "assets/imgbox/svg/st.svg";
import svgSoc4 from "assets/imgbox/svg/stw.svg";
import imgMain from "assets/imgbox/png/post-main.png";

const content = () => {
  return (
    <section className="content base-frame">
      <div className="content-socialbox">
        <div className="content-socialbox__view">
          <div className="view-box">
            <img src={svgclock} alt="asdf" />
            <p>5-dekabr, 09:24</p>
          </div>{" "}
          <div className="view-box">
            <img src={svgeye} alt="asdf" />
            <p>12900</p>
          </div>{" "}
          <div className="view-box">
            <img src={svgthu} alt="asdf" />
            <p>544</p>
          </div>{" "}
          <div className="view-box">
            <img src={svgbook} alt="asdf" />
            <p>2 daqiqada o'qiladi</p>
          </div>
        </div>
        <div className="content-socialbox__net">
          <a href="#net" className="net-icon">
            <img src={svgSoc3} alt="soc1" />
          </a>
          <a href="#net" className="net-icon">
            <img src={svgSoc1} alt="soc1" />
          </a>
          <a href="#net" className="net-icon">
            <img src={svgSoc4} alt="soc1" />
          </a>
          <a href="#net" className="net-icon">
            <img src={svgSoc2} alt="soc1" />
          </a>
        </div>
      </div>
      <h2 className="content-header__title">
        Dasturlash sohasida ishlash uchun Ingliz tilining o'rni
      </h2>
      <p className="content-header__des">
        Hozirgi kunda dasturlash sohalarini o'rgatishga bel bog'lagan o'quv
        markazlar va onlayn kurslarda bu sohaning yaxshi daromad olib kelishi,
        o'rganish qiyin emasligi va kadrlar yetishmovchiligi haqida bong urib
        o'z kurslarini reklama qilmoqda.
      </p>
      <div className="content-header__img">
        <img src={imgMain} alt="das" />
      </div>
      <div className="content-tagbox">
        <h4>muamo</h4>
        <p>
          Hozirgi kunda dasturlash sohalarini o'rgatishga bel bog'lagan o'quv
          markazlar va onlayn kurslarda bu sohaning yaxshi daromad olib kelishi,
          o'rganish qiyin emasligi va kadrlar yetishmovchiligi haqida bong urib
          o'z kurslarini reklama qilmoqda. Lekin ularning aksariyati bu sohada
          Ingliz tilini bilish qanchalik ahamiyatli ekanini unutmoqda.
        </p>
        <p>
          Kompyuterga biz o'zimiz hohlagan vazigani bajarishini dasturlash
          tilida tushuntirishimiz kerak. Dasturlash tillari esa Ingliz tiliga
          asoslangan. Albatta kerakli sintaksisni yodlab olib ham dastur yozsa
          bo'ladi lekin mohiyatni tushunib dastur yozilsa yozilgan kod sifati
          ham baland bo'ladi.
        </p>
        <div className="sitata">
          <div className="sitata__text">
            <span className="sss">“</span>
            <b>
              Ishxonamizda ba'zi hamkasblarimiz Ingliz tilini yaxshi bilmaydi
              lekin tinimsiz mehnat qilib, izlanib dasturlashni o'rgangan va shu
              sohada faoliyat yuritib kelishmoqda.
            </b>
          </div>
        </div>
        <h4>Yechim (?)</h4>
        <p>
          Mening fikrimcha dasturchi hamkasblarimizning Ingliz tilidan
          bilimlarini oshirish bo'yicha ular dasturlashni o'rganishni boshlagan
          paytdan shug'ullanish kerak. Ularga bu qanchalik muhim ekanligini
          tushuntirish, maxsus kurslar tashkil qilish foydali bo'ladi.
        </p>
        <p>
          Allaqachon sohada faoliyat yuritayotgan dasturchilar esa, ish
          mobaynida iloji boricha atrof muhitni Ingliz tili bilan bog'lab olish
          foyda bo'ladi. Masalan yangi o'rgangan bilimni ikkita gap bo'lsa ham
          ingliz tilida yozib yurish, Ingliz tilidagi dasturlash sohasidagi
          podkastlarni transkripsiyasini oqib eshitib yurish. Yoki ijtimoiy
          tarmoqlardagi Ingliz tilida yuritiluvchi sahiflarda aktiv bo'lish.
        </p>
        <h4>P.S</h4>
        <p>
          Qisqa qilib aytganda, Ingliz tilini yaxshi bilmaslik uyda chiroq bo'la
          turib fonar yoqib o'tirishga o'xshaydi 😅.
        </p>
        <hr />
        <ul>
          <li>
            <a href="#tags">#dasturlash</a>
          </li>
          <li>
            <a href="#tags">#brending</a>
          </li>
          <li>
            <a href="#tags">#kritika</a>
          </li>
          <li>
            <a href="#tags">#dasturlash</a>
          </li>
          <li>
            <a href="#tags">#brending</a>
          </li>
          <li>
            <a href="#tags">#kritika</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default content;
