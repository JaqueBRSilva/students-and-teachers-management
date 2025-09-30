import './SideMenu.css'

export function SideMenu() {

    return (
        <aside>
            <div className="side__section">
                <h2 className="side__title-section">Navegação</h2>
                <nav>
                    <ul>
                        <li>Alunos</li>
                    </ul>
                    <ul>
                        <li>Professores</li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}