import logo from '../assets/Investment-calculator-logo.png'

export default function Header(){
    return(
        <header>
            <img src={logo} alt='Logo showing a money bagg'/>
            <h1>Investment Calculator</h1>
        </header>
    )
}