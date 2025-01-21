
import TemplateModal from './components/interactive-components/template-modal/TemplateModal';
import { AboutTheList, Banner, Footer, Header, SceneWrapper } from './components/layout-components';
import { data } from './mock-data';

function App() {
  return (
   <>
   <Header/>
   <Banner/>
   <SceneWrapper data={data}/>
   <TemplateModal content={<p>This is a modal that shows on first page load!</p>} />
   <AboutTheList/>
   <Footer/>
   </>
  );
}

export default App;
