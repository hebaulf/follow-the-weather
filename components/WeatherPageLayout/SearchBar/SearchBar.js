import style from './searchBar.module.scss'

export const Searchbar = ({ geoCoder }) => {
  return (
    <div ref={geoCoder} style={{ marginLeft: 'auto', backgroundColor: 'red'}} />
  )
};
