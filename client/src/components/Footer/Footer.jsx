import ghIcon from '../utils/images/footer/ghIcon'
import snyckers from '../utils/images/footer/snyckers'

const toGitHubPartnets = 'amigos del pg'


export const Footer = ()=>{
    return (
        <div>
            <p>pro-hacking</p>
            <img src={snyckers} alt="not found" />
            <a href={toGitHubPartnets}>
                <img src={ghIcon} alt="not found" />
            </a>
        </div>
    )
};
