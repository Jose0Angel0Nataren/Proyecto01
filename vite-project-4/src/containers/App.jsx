import Library from '../components/Library'
import Header from '../components/Header'
import Footer from '../components/Footer'

function App(){
    return(
        /*(Se puede resolver con un fragment para mandar alv el div de más)
        <div>
            <Header></Header>
            <Contacto></Contacto>
            <Footer></Footer>
        </div>
         */
        <>
            <Header></Header>
            <Library></Library>
            <Footer></Footer>
        </>
        
    );
}

export default App;