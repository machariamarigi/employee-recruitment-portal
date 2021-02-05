import { shallow } from "enzyme"
import Home from "./Home"

describe("Home testing", () => {
    it("should render Home component", () => {
        const wrapper = shallow(<Home />)
        expect(wrapper).toMatchSnapshot()
    })
})
