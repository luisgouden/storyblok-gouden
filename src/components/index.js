import Page from './Page.svelte'
import NotFound from './404.svelte'

import BlokHeader from './BlokHeader.svelte'
import BlokFigure from './BlokFigure.svelte'
import BlokH1 from './BlokH1.svelte'
import BlokTexto from './BlokTexto.svelte'
import BlokBlok from './BlokBlok.svelte'
import BlokLandingProject from './BlokLandingProject.svelte'
import BlokLandingContainer from './BlokLandingContainer.svelte'
import BlokList from './BlokList.svelte'
import BlokListContainer from './BlokListContainer.svelte'

const Components = {
  Page,
  BlokFigure,
  BlokBlok,
  BlokH1,
  BlokTexto,
  BlokHeader,
  BlokLandingProject,
  BlokLandingContainer,
  BlokList,
  BlokListContainer

}

export default component => {
  // component does exist
  if (typeof Components[component] !== "undefined") {
    return Components[component]
  }

  return NotFound
}
