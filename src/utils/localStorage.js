export const loadItems = () => {
  try{
    const items = localStorage.getItem('items')
    if(items === null) return undefined
    return JSON.parse(items)
  } catch (err) {}
}

export const saveItems = (state) => {
  try{
    localStorage.setItem('items', JSON.stringify(state))
  } catch(err){}
}
