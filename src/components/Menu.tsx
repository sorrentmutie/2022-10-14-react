import { FC, useState } from "react";
import cn from 'classnames';
import { MenuProps, MenuVoice } from "../models/productsProps";
import { Link } from "react-router-dom";

export const Menu: FC<MenuProps> = (menu) => {

    const [opened, setOpened] = useState<boolean>(true);
    const toggle = () => setOpened(!opened);

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
        <div className={cn('navbar', {'MenuBackground': opened})} onClick={toggle}  
          onMouseOver={ () => setOpened(true)} onMouseOut={() => setOpened(false)  }   >Corso React</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">

           {
               menu.items.map( (item: MenuVoice) => {
                    return(
                        // <li key={item.key} className="nav-item" onClick={() => menu.onItemClicked(item.url)}>
                        //     <span className="nav-link">{item.text}</span>
                        // </li>
                       <li key={item.key} className="nav-item" >
                            <Link to={item.url}>
                                 <span className="nav-link">{item.text}</span>
                            </Link>
                       </li>


                    )
               })
           }
        </ul>
        </div>
    </div>
    </nav>
    );
}