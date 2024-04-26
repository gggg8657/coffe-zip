import styled from "styled-components";
import { ListProps } from "../interfacce/list-interface";

interface ItemProps {
    $unmanned: boolean;
    $time: string;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-top: 20px;
    overflow-y: scroll;
    padding: 0px 10px;
`;

const Item = styled.div<ItemProps>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) =>
        props.$unmanned
            ? "#48D1CC"
            : props.$time === null
            ? "#f0f0f0"
            : "#FA0050"};
    padding: 6px 10px;
    font-weight: bold;
    color: white;
`;

const Titie = styled.div`
    position: sticky;
    top: 0;
    font-weight: bold;
    background-color: #ffffff;
`;

const List: React.FC<{ list: ListProps[] }> = ({ list }) => {
    return (
        <Wrapper>
            <Titie>Open Cafe Near By</Titie>
            {list ? (
                list.map((item) => (
                    <Item
                        key={item.name}
                        $unmanned={item.unmanned}
                        $time={item.closed}
                    >
                        <div>{item.name}</div>
                        {item.unmanned === true && <div>무인</div>}
                        {item.closed !== null && <div>~ {item.closed}</div>}
                        {item.dist_meters < 1000 ? (
                            <div>{item.dist_meters}m</div>
                        ) : (
                            <div>{(item.dist_meters / 1000).toFixed(1)}km</div>
                        )}
                    </Item>
                ))
            ) : (
                <div>no Item</div>
            )}
        </Wrapper>
    );
};

export default List;
