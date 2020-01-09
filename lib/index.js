import {
	Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export const WIDTH = Dimensions.get('window').width 
export const HEIGHT = Dimensions.get('window').height 


export function cleanTitle (title){
  return title.replace(/&#8217;/s, '\'')
}

export function cleanContent (html){
    return `
    <style>
      img { padding-left: -20px; width: 100% }
      p { padding-left: 30px; font-size: 24px; }
    </style>` + html.replace(/\<div id=\"register\"\>(.*)$/s, '')
  }

export function getPromotion (dataSource, tags){
    console.log(dataSource);
    console.log(tags);
    if (!dataSource || !tags) {
      return "<div>Waiting for server ...</div>"
    }
    let appHomeTag = 0;
    for(let tag of tags) {
      if (tag.name == 'app-home') {
        appHomeTag = tag.id
      }
    }
    if (appHomeTag > 0) {
      for (let page of dataSource) {
        if (page.tags.includes(appHomeTag)) {
          return cleanContent(page.content.rendered)
        }
      }
    }
    return "<div>Can not find app home page!</div>"
}

export function getCurrentProjectList (dataSource){
    console.log(dataSource);
    if (!dataSource) {
      return []
    }
    return dataSource.filter( item => item.meta['app-order'] > 0).sort( (a,b) => b.meta['app-order'] - a.meta['app-order'])
}

export function getAllActiveProjectList (dataSource, tags) {
    console.log(dataSource);
    console.log(tags);
    if (!dataSource || !tags) {
      return "<div>Waiting for server ...</div>"
    }
    let appTag = 0;
    for(let tag of tags) {
      if (tag.name == 'app') {
        appTag = tag.id
      }
    }
    return dataSource.filter( item => item.tags.includes(appTag))
}

export default { WIDTH, HEIGHT, cleanContent, getPromotion, getCurrentProjectList, getAllActiveProjectList }
