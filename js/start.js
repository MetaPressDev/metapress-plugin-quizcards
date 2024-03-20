//
// My MetaPress Plugin
import React from 'react';
import { v4 as uuidv4 } from 'uuid'

import metadata from '../package.json'
import CardModifier from './CardModifier';

export default class QuizCardsPlugin extends React.PureComponent {

    // Plugin information
    id              = metadata.metapress?.id || metadata.name
    name            = metadata.metapress?.name || metadata.name
    description     = metadata.metapress?.description || metadata.description
    version         = metadata.version
    provides        = [ 'quizcards', 'modifier:quizcards' ]
    requires        = [ 'menubar', 'entities', 'dialogs' ]

    /** Create modifier */
    createModifier() {
        return new CardModifier()
    }

    /** Called on load */
    onLoad() {


    }

  
}   