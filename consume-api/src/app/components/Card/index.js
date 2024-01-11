import styles from "./card.module.css";

export default async function Card() {
  // Consulta a API para obter os dados e retorna em formato JSON
  const cards = await fetch("http://localhost:8080/viagens/listar").then(
    (res) => res.json()
  );

  // Formata a data para o formato brasileiro
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  // Formata o preço para o formato brasileiro
  const formatPrice = (price) => {
    const options = {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    return price.toLocaleString("pt-BR", options);
  };

  return (
    <table className={styles.tabela}>
      <thead>
        <tr>
          <th className={styles.centeredCell}>Origem</th>
          <th className={styles.centeredCell}>Destino</th>
          <th className={styles.centeredCell}>Data de ida</th>
          <th className={styles.centeredCell}>Data de volta</th>
          <th className={styles.centeredCell}>Preço</th>
          <th className={styles.centeredCell}>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {cards?.map((card) => (
          <tr key={card.id}>
            <td className={styles.centeredCell}>{card.origem}</td>
            <td className={styles.centeredCell}>{card.destino}</td>
            <td className={styles.centeredCell}>{formatDate(card.dataIda)}</td>
            <td className={styles.centeredCell}>
              {formatDate(card.dataVolta)}
            </td>
            <td className={styles.centeredCell}>{formatPrice(card.preco)}</td>
            <td className={styles.centeredCell}>{card.descricao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
