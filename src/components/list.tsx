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
            ? "#48D1CC" //무인
            : props.$time === null
            ? "#f0f0f0" // 24시
            : "#FA0050"}; //24시 X
    padding: 6px 10px;
    color: white;
`;

const Titie = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    &:after {
        content: "";
        flex-grow: 1;
        height: 1px;
        background: #000000;
        font-size: 0px;
        line-height: 0px;
        margin-left: 8px;
    }
`;

const BoldText = styled.span`
    font-weight: bold;
    &.title {
        margin-right: 4px;
    }
`;

const RowBox = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

const List: React.FC<{ list: ListProps[] }> = ({ list }) => {
    return (
        <Wrapper>
            <Titie>
                <BoldText className="title">Open Cafe</BoldText> Near By
            </Titie>
            {list ? (
                list.map((item) => (
                    <Item
                        key={item.name}
                        $unmanned={item.unmanned}
                        $time={item.closed}
                    >
                        <BoldText>{item.name}</BoldText>
                        <RowBox>
                            {item.closed !== null && <div>~ {item.closed}</div>}
                            {item.unmanned === true && (
                                <BoldText>무인</BoldText>
                            )}
                            {item.dist_meters < 1000 ? (
                                <div>{item.dist_meters}m</div>
                            ) : (
                                <div>
                                    {(item.dist_meters / 1000).toFixed(1)}km
                                </div>
                            )}
                        </RowBox>
                    </Item>
                ))
            ) : (
                <div>no Item</div>
            )}
        </Wrapper>
    );
};

export default List;
