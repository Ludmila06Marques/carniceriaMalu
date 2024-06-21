import * as S from "./styles.js";
import Carousel from "./Carousel.js";
import MultipleItems from "./CarouselHorizontal.js";
import corte from "../img/corte.jpg"
import jefa from "../img/carniceriafoto9.jpg"
export default function Top() {
  return (
    <>
      <S.TopBarr>
        <S.Container>
          <S.Container2>
            <S.Title>Carnicería Malú</S.Title>
          </S.Container2>
          <S.Container3>
            <S.Container4>
              {" "}
              <S.Title2 href="#section1">INICIO</S.Title2>
            </S.Container4>
            <S.Container4>
              {" "}
              <S.Title2 href="#section2">NOSOTROS</S.Title2>
            </S.Container4>

            <S.Container4>
              {" "}
              <S.Title2 href="#section3">PRODUCTOS</S.Title2>
            </S.Container4>
            <S.Container4>
              {" "}
              <S.Title2 href="#section4">DONDE ESTAMOS</S.Title2>
            </S.Container4>
          </S.Container3>
        </S.Container>
      </S.TopBarr>

      <div id="section1" className="section">
        <S.Body>
          <S.ContainerToSection>
            {" "}
            <Carousel />
          </S.ContainerToSection>
          <S.ContainerToSection>
            <S.Title1>Bienvenidos a Carnicería Malu</S.Title1>
            <div>
              <S.Title4>¡Descubre lo mejor de Galicia en cada bocado!</S.Title4>
              <S.Title4>
                En Carnicería Malu, te ofrecemos una selección incomparable de
                carnes frescas, productos de la huerta y delicias del
                mercadillo. Nuestra pasión por la calidad y la tradición se
                refleja en cada producto que ponemos a tu disposición. Ven y
                experimenta la auténtica esencia gallega.
              </S.Title4>
            </div>
            <div>
              <img style={{ width: "100%", marginTop: "90px" }} src={corte} />
            </div>
          </S.ContainerToSection>
        </S.Body>
      </div>

      <div id="section2" className="section">
        <S.Body style={{backgroundColor:"#C22700", width:"100%", display:"flex", justifyContent:"center"}} >
          <div style={{ width:"90%",display:"flex", flexDirection:"row"}}    >

             <S.ContainerToSection>
            <S.Title1 style={{color:"white"}}  >Nosotros</S.Title1>
            <div>
              <S.Title4 style={{color:"white"}}>Quiénes Somos...</S.Title4>
              <S.Title4 style={{color:"white", fontWeight:"100"}}>
               En Carnicería Malu, somos más que una carnicería. Somos una familia comprometida con la excelencia y el sabor. Ubicados en el corazón de Galicia, nos enorgullecemos de nuestra herencia y de los productos locales que ofrecemos. Cada día, trabajamos con dedicación para llevar a tu mesa lo mejor de nuestra tierra, siempre con un trato cercano y personalizado.


              </S.Title4>
            </div>
            <div style={{width:"100%"}} >
            <MultipleItems />
            </div>
          </S.ContainerToSection>
          <S.ContainerToSection  >
            <div style={{display:"flex", justifyContent:"center"}}>
                <S.Title1 style={{color:"white"}} >La jefa!</S.Title1>
            </div>
           
        <div style={{display:"flex", justifyContent:"center"}}>
           <img style={{ width: "80%"}} src={jefa} />
        </div>
         
          </S.ContainerToSection>
          </div>
       
         
        </S.Body>
      </div>

      <S.Body>
        <div id="section3" className="section">
          <h2>Seção 1</h2>
          <p>Conteúdo da Seção 1...</p>
        </div>
      </S.Body>
      <S.Body>
        <div id="section4" className="section">
          <h2>Seção 1</h2>
          <p>Conteúdo da Seção 1...</p>
        </div>
      </S.Body>
    </>
  );
}
