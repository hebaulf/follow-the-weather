import { useEffect } from 'react'

const ServiceListByCategory = ({
  title, description, category
}) => {
  //const { page, categoryIds, regionIds } = useThingsToDoFilter();
}

const RESULT_SIZE = 12

const variables = {
  categoryIds: categoryIds.length > 0 ? categoryIds : undefined,
  regionIds: regionIds.length > 0 ? regionIds : undefined,
  take: RESULT_SIZE,
}