import React from 'react';
import { Content, Layout, Header, Navigation, Drawer, Textfield  } from 'react-mdl';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        // Uses Link transparent header that draws on top of the layout's background 
        <div style={{height: '300px', position: 'relative'}}>
            <Layout style={{background: 'url(https://1540443815.rsc.cdn77.org/data/images/full/54762/pen-or-laptop.jpg) center / cover'}}>
                <Header transparent title="Notepad" style={{color: 'white'}}>
                    <Navigation>
                        <Link to='/notes'>Notes</Link>
                        <Link to='/'>New</Link>
                        <Link to='/'>Sign In</Link>
                        <Textfield
                            value=""
                            onChange={() => {}}
                            label="Search"
                            expandable
                            expandableIcon="search"
                        />
                    </Navigation>
                </Header>
                <Drawer title="NotePad">
                    <Navigation>
                        <Link to='/notes'>Notes</Link>
                        <Link to='/'>Link</Link>
                        <Link to='/'>Link</Link>
                        <Textfield
                            value=""
                            onChange={() => {}}
                            label="Search"
                            expandable
                            expandableIcon="search"
                        />
                    </Navigation>
                </Drawer>
                <Content />
            </Layout>
        </div>
    )
}

export default Navbar
