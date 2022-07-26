import PropTypes from 'prop-types'
import TransactionItem from '../TransactionItem/TransactionItem'
import s from '../TransactionHistory/TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.history}>
  <thead className={s.title}>
    <tr>
      <th className={s.th}>Type</th>
      <th className={s.th}>Amount</th>
      <th className={s.th}>Currency</th>
    </tr>
  </thead>
  <tbody className={s.tbody}>
     {items.map((el) => (
          <TransactionItem
            key={el.id}
            type={el.type}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
}

export default TransactionHistory;