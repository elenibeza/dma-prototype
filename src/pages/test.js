import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';
import FroalaEditorComponent from "react-froala-wysiwyg";

function App(){
    return < FroalaEditorComponent tag="textarea" />; 
  }
export default App;
