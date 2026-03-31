type DashboardProps = {
    usuario: string | null;  // O nome do usuário ou null se não estiver logado
};
  
export const Dashboard: React.FC<DashboardProps> = ({ usuario }) => {
    return (
      <div>
        {usuario ? (
          <h1>Bem-vindo, {usuario}!</h1>
        ) : (
          <h2 className="nao-logado">Você precisa fazer login para acessar o painel.</h2>
        )}
      </div>
    );
};
  