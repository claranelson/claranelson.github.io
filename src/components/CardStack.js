import classNames from 'classnames';
export const CardStack = ({ children, className, ...props }) => {

  return (
    <div className={classNames("d-flex gap-4 flex-column mb-5", className)} {...props}>
      {children}
    </div>
  )
}

export default CardStack