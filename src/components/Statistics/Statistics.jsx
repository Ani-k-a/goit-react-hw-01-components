import PropTypes from 'prop-types'
import s from '../Statistics/Statistics.module.css'

const Statistics = (props) => {
  const { title, stats } = props;
    return (
        <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2> }
        
            <ul className={s.statList}>
                {stats.map((el) => (
                <li className={s.item} key = {el.id} style={{backgroundColor: getRandomHexColor()}}>
                    <span className={s.label}>{el.label}</span>
                        <span className={s.percentage}>{`${el.percentage}%`}</span>
                </li>
                ))}  
            </ul>
        </section>  
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
}

export default Statistics;

