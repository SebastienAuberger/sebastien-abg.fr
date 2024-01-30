function About() {
  return (
    <>
        <div className="centered about-me">
            <div className="nes-container is-dark with-title is-centered">
                <p className="title">A propos de moi !</p>
                <p>Je m'apelle Sébastien, j'ai 26 ans, je suis développeur informatique, j'ai obtenu un BTS SN ainsi que ma Licence d'informatique, ce qui fait de moi quelqu'un de polyvalent dans le domaine ^^. J'ai toujours aimé ce domaine et eu une fascination pour les nouvelles technologies et jusqu'ou elle pouvaient nous emmener. Pour en savoir plus sur moi je t'invite à me suivre sur les réseaux et à regarder le reste de ce site ;)</p>
            </div>
        </div>
        <div className="skill-table">
            <div className="nes-table-responsive">
                <table className="nes-table is-bordered is-centered">
                    <thead>
                        <tr>
                            <th colSpan={6}>Mes compétences</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><img src="./public/assets/images/react.png" alt="" /></td>
                        <td>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large is-half heart"></i>
                            <i className="nes-icon is-large heart is-transparent"></i>
                            <i className="nes-icon is-large heart is-transparent"></i>
                        </td>
                        <td><img src="./public/assets/images/css-3.png" alt="" /></td>
                        <td>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart is-transparent"></i>
                            <i className="nes-icon is-large heart is-transparent"></i>
                        </td>
                        <td><img src="./public/assets/images/python.png" alt="" /></td>
                        <td>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart is-transparent"></i>
                            <i className="nes-icon is-large heart is-transparent"></i>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="./public/assets/images/html-5.png" alt="" /></td>
                        <td>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large is-half heart"></i>
                        </td>
                        <td><img src="./public/assets/images/php.png" alt="" /></td>
                        <td>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large is-half heart"></i>
                        </td>
                        <td><img src="./public/assets/images/typescript.png" alt="" /></td>
                        <td>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large heart"></i>
                            <i className="nes-icon is-large is-half heart"></i>
                            <i className="nes-icon is-large is-transparent"></i>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default About
