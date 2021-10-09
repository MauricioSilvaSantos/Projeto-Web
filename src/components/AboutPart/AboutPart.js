// import about1 from '../assets/images/about/10.jpg'
// import about2 from '../assets/images/about/asfalto.jpeg'
// import about3 from '../assets/images/about/12.jpg'

// import aboutShape1 from '../assets/images/about/about-shape-1.svg'
// import aboutShape2 from '../assets/images/about/about-shape-2.svg'

export default function AboutPart() {
  return (
    <div>
      <section id="about">
        <div class="relative pt-20 about-area">
          <div class="container px-4">
            <div class="flex flex-wrap">
              <div class="w-full lg:w-1/2">
                <div class="mx-4 mt-12 about-content max-w-[450px] wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                  <div class="mb-4 section-title">
                    <div class="w-40 h-1 mb-3 bg-gradient-to-r to-[#fe8464] from-[#fe6e9a]"></div>
                    <h3 class="text-[32px] pt-2 font-bold"> Densidade <span class="font-normal"> IN SITU</span></h3>
                  </div>
                  {/* <!-- section title --> */}
                  <p class="mb-8">
                  No controle da compactação em campo, é prioridade o ensaio de laboratório 
                  como referência e verificar o que é obtido em campo com equipamento,
                  conferindo os resultados com os de laboratório, dentro das especificações,
                  Ensaio embasado na ABNT NBR 7185:2016.
                  </p>
                  <a href="page-ground" class="main-btn gradient-btn ">Saiba mais</a>
                </div>
              </div>
              <div class="w-full lg:w-1/2">
                <div class="mx-4 mt-12 text-center about-image wow fadeInRightBig"data-wow-duration="1s"data-wow-delay="0.5s">
                  {/* <img src={about1} alt="about" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--====== ABOUT PART START ======--> */}
        <div class="relative pt-20 about-area">
          <div class="about-shape-2 absolute top-0 left-0 h-full z-[-1] w-[35%]">
            {/* <img src={aboutShape2} alt="shape" /> */}
          </div>
          <div class="container px-4">
            <div class="flex flex-wrap">
              <div class="w-full lg:w-1/2 lg:order-last">
                <div
                  class="mx-4 mt-12 about-content  max-w-[450px] lg:ml-auto wow fadeInLeftBig"data-wow-duration="1s"data-wow-delay="0.5s">
                  <div class="mb-4 section-title">
                    <div class="w-40 h-1 mb-3 bg-gradient-to-r to-[#fe8464] from-[#fe6e9a]"></div>
                    <h3 class="text-[32px] pt-2 font-bold">Concreto betuminoso <span class="font-normal"> usinado a quente (CBUQ)</span></h3>
                  </div>
                  {/* <!-- section title --> */}
                  <p class="mb-8">
                  Na BETONTECH garantimos a qualidade, economia e segurança das obras de
                  pavimentação asfáltica na qual se aplica o concreto betuminoso usinado a quente (CBUQ),
                  é indispensável a aplicação dos procedimentos corretos do controle tecnológico
                  laboratorial que busca redução de patologias na malha
                  rodoviária, reduzindo gastos com reparos e manutenções.
                  </p>
                  <a href="page-asphalt" class="main-btn gradient-btn">Saiba mais </a>
                </div>
                {/* <!-- about content --> */}
              </div>
              <div class="w-full lg:w-1/2 lg:order-first">
                <div class="mx-4 mt-12 text-center about-image wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                  {/* <img src={about2} alt="about" /> */}
                </div>
                {/* <!-- about image --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </div>
        {/* <!--====== ABOUT PART ENDS ======--> */}

        {/* <!--====== ABOUT PART START ======--> */}
        <div class="relative pt-20 about-area">
          <div class="container px-4">
            <div class="flex flex-wrap">
              <div class="w-full lg:w-1/2">
                <div class="mx-4 mt-12 about-content max-w-[450px] wow fadeInLeftBig"data-wow-duration="1s"data-wow-delay="0.5s">
                  <div class="mb-4 section-title">
                    <div class="w-40 h-1 mb-3 bg-gradient-to-r to-[#fe8464] from-[#fe6e9a]"></div>
                    <h3 class="text-[32px] pt-2 font-bold">Solo <span class="font-normal">Limite de Liquidez e Limite de Plasticidade</span></h3>
                  </div>
                  {/* <!-- section title --> */}
                  <p class="mb-8">
                  Limite de Liquidez e Limite de Plasticidade estes ensaios permitem determinar 
                  os limites de consistência do solo. O termo consistência é usado para descrever um estado 
                  físico, isto é, o grau de ligação entre as partículas das substâncias.
                  Normatizados pela NBR – 7180-84 – “Solo – Determinação do Limite de Plasticidade – 
                  Método de ensaio” e NBR 6459 – ABNT – “Solo – Determinação do Limite de Liquidez”    
                  </p>
                  <a href="page-ground" class="main-btn gradient-btn"
                    >Saiba mais</a>
                </div>
              </div>
              <div class="w-full lg:w-1/2">
                <div class="mx-4 mt-12 text-center about-image wow fadeInRightBig" data-wow-duration="1s"data-wow-delay="0.5s">
                  {/* <img src={about3} alt="about" /> */}
                </div>              
              </div>
            </div>
          </div>          
        </div>
        {/* <!--====== ABOUT PART START ======--> */}
        <div class="relative pt-20 about-area">
          <div class="about-shape-2 absolute top-0 left-0 h-full z-[-1] w-[35%]">
            {/* <img src={aboutShape2} alt="shape" /> */}
          </div>
          <div class="container px-4">
            <div class="flex flex-wrap">
              <div class="w-full lg:w-1/2 lg:order-last">
                <div class="mx-4 mt-12 about-content max-w-[450px] lg:ml-auto wow fadeInLeftBig"data-wow-duration="1s"data-wow-delay="0.5s">
                  <div class="mb-4 section-title">
                    <div class="w-40 h-1 mb-3 bg-gradient-to-r to-[#fe8464] from-[#fe6e9a]"></div>
                    <h3 class="text-[32px] pt-2 font-bold"> Concreto <span class="font-normal"> Teste Slump</span></h3>
                  </div>
                  {/* <!-- section title --> */}
                  <p class="mb-8">
                  Na BETONTECH Controle Tecnológico nossos serviços estão embasados nas 
                  especificações técnicas ABNT NBR NM 67:1998, ABNT NBR 5738:2015. Garantindo
                  exatidão nos serviços prestados.
                  </p>
                  <a href="page-concrete" class="main-btn gradient-btn"> Saiba mais </a>
                </div>
                {/* <!-- about content --> */}
              </div>
              <div class="w-full lg:w-1/2 lg:order-first">
                <div class="mx-4 mt-12 text-center about-image wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                  {/* <img src={about2} alt="about" /> */}
                </div>
                {/* <!-- about image --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </div>
      </section>
    </div>
  )
}