import { client } from "../utils/fetchClient"

export const getBeerRecipes = (page = 1) => {
  return client.get(`/beers?page=${page}`)
}

export const getBeerRecipe = (id) => {
  return client.get(`/beers/${id}`)
}


