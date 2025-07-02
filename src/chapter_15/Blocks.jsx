import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: lightgry;
`

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
    },
    {
        label: "2",
        padding: "3rem",
        backgroundColor: "green",
    },
]

const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`

function Blocks() {
    return (
        <Wrapper>
            {blockItems.map((item) => {
                return (
                    <Block
                        padding={item.padding}
                        backgroundColor={item.backgroundColor}
                        key={item.label}
                    >
                        {item.label}
                    </Block>
                )
            })}
        </Wrapper>
    )
}

export default Blocks;