import { ButtonLink } from "../../ui/ButtonLink/ButtonLink"
import { Input } from "../../ui/Input/Input"
import './MainNav.css'

export const MainNav = () => {
    return(
        <header className="navHeader">
            <nav>
                <section className="left">
                    <img src="/images/main_logo.png" alt="campusLink" className='main_logo'/>
                    <Input />
                    <section className="buttons">
                        <ButtonLink route='/'>inicio</ButtonLink>
                        <ButtonLink route='#'>Grupos</ButtonLink>
                        <ButtonLink route='#'>Articulos</ButtonLink>
                        <ButtonLink route='#'>Comunicados</ButtonLink>
                    </section>
                </section>
                <section className="buttons-profile">
                    <ButtonLink route='#'>mi perfil</ButtonLink>
                    <div>
                        <ButtonLink route='#'>
                            <img src="/images/settings_logo.png" alt="404" className="settings"/>
                        </ButtonLink>
                    </div>
                </section>
            </nav>
        </header>
    )
}