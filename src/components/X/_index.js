import Grid from './Grid.svelte'
import Teaser from './Teaser.svelte'
import Feature from './Feature.svelte'
import Page from './Page.svelte'
import NotFound from './404.svelte'

import StoryHome from './StoryHome.svelte'

import BlokHeader from './BlokHeader.svelte'
import BlokFigure from './BlokFigure.svelte'
import BlokH1 from './BlokH1.svelte'
import BlokTexto from './BlokTexto.svelte'
import BlokBlok from './BlokBlok.svelte'

const Components = {
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  page: Page,
  storyHome: StoryHome,
  blokFigure: BlokFigure,
  blokBlok: BlokBlok,
  blokH1: BlokH1,
  blokTexto: BlokTexto,
  blokHeader: BlokHeader
}

export default component => {
  // component does exist
  if (typeof Components[component] !== "undefined") {
    return Components[component]
  }

  return NotFound
}
