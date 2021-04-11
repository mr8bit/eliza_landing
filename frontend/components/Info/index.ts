import Container from './Сontainer'
import Text from './Text'
import Image from './Image'
import Section from './Section'

const InternalForm: React.ForwardRefRenderFunction<unknown, any> = (props, ref) => {
    return props
}

type InternalFormType = typeof InternalForm;

interface InfoInterface extends InternalFormType {
    Section: any,
    Container: any,
    Text: typeof Text,
    Image: typeof Image,
}


const Info = InternalForm as InfoInterface;

Info.Container = Container;
Info.Section = Section;
Info.Text = Text;
Info.Image = Image;

export default Info;
