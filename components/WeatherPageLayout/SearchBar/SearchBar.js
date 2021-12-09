import style from './'

export const Searchbar = ({ geoCoder }) => {
  return (
    <div ref={geoCoder} style={{ marginLeft: 'auto', backgroundColor: 'red'}} />
  )
};
