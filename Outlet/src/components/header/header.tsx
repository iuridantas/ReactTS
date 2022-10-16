import { Link, useNavigate } from 'react-router-dom';
import {
  HeaderButtons,
  HeaderComponent,
  HeaderLogo,
  HeaderSearch,
} from './style';

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderComponent>
      <HeaderLogo>
        <Link to="/">
          <h1>Outlet</h1>
          <img src="./outlet.png" alt="logo" height="50px" width="50px" />
        </Link>
      </HeaderLogo>
      <HeaderSearch>
        <input type="text" placeholder="Procurar Produto" />
      </HeaderSearch>
      <HeaderButtons>
        <div>
          <button
            onClick={() => {
              navigate('/create');
            }}
          >
            Cadastrar Produto
          </button>
          <button>Carrinho</button>
          <button>Logout</button>
        </div>
      </HeaderButtons>
    </HeaderComponent>
  );
}
