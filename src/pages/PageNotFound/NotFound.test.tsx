import { shallow } from "enzyme"
import NotFound from './NotFound'

describe("Home testing", () => {
    it("should render Home component", () => {
        const wrapper = shallow(<NotFound />)
        expect(wrapper).toMatchSnapshot()
    })
})