import React from 'react'
import Footer from '../component/footer'
import Icon from '../component/icons'

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About us</Footer.Title>
                    <Footer.Link href='#'>Story</Footer.Link>
                    <Footer.Link href='#'>Clients</Footer.Link>
                    <Footer.Link href='#'>Test</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href='#'>Markiting</Footer.Link>
                    <Footer.Link href='#'>Consulting</Footer.Link>
                    <Footer.Link href='#'>Development</Footer.Link>
                    <Footer.Link href='#'>Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href='#'>Amroli</Footer.Link>
                    <Footer.Link href='#'>Surat</Footer.Link>
                    <Footer.Link href='#'>Katargam</Footer.Link>
                    <Footer.Link href='#'>Varacha</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href='https://www.facebook.com'><Icon className='fab fa-facebook-f'/>Facebook</Footer.Link>
                    <Footer.Link href='#'><Icon className='fab fa-youtube'/>Youtube</Footer.Link>
                    <Footer.Link href='#'><Icon className='fab fa-instagram'/>Instagram</Footer.Link>
                    <Footer.Link href='#'><Icon className='fab fa-twitter'/>Twitter</Footer.Link>
                </Footer.Column>
                </Footer.Row> 
            </Footer.Wrapper>
        </Footer>
    )
}