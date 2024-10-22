import styled from "styled-components";
import { ListProps } from "../interfacce/list-interface";
import SkeletonUI from "./skeleton-ui";
import MapStore from "../stores/map-store";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-top: 14px;
    overflow-y: scroll;
    padding: 0px 20px;
`;

const Item = styled.div`
    cursor: pointer;
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 6px 0px;
    color: #000000;
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
    margin-top: 12px;
`;

const BoldText = styled.span`
    font-weight: bold;
    &.title {
        margin-right: 4px;
    }
    &.unmanned {
        background-color: #ffece3;
        border-radius: 20px;
        padding: 4px 8px;
    }
    &.allday {
        background-color: #f8ebfe;
        border-radius: 20px;
        padding: 4px 8px;
    }
`;

const RowBox = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    &.title {
        gap: 8px;
    }
`;

const NoItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4c73c3;
    font-weight: bold;
    margin-top: 20px;
`;

const Meter = styled.div`
    min-width: 42px;
    font-size: 16px;
`;

const List: React.FC<{
    list: ListProps[];
    isLoading: boolean;
}> = ({ list, isLoading }) => {
    const { setSelected } = MapStore();
    const handleClickList = (
        cafe: string,
        address: string,
        lat: number,
        lng: number
    ) => {
        setSelected([cafe, address, lat, lng]);
    };

    return (
        <Wrapper>
            <Titie>
                <BoldText className="title">Open Cafe</BoldText> Near By
            </Titie>
            {isLoading ? (
                <SkeletonUI />
            ) : list ? (
                list.map((item) => (
                    <Item
                        key={item.name}
                        onClick={() =>
                            handleClickList(
                                item.name,
                                item.address,
                                item.lat,
                                item.lng
                            )
                        }
                    >
                        <RowBox className="title">
                            <BoldText>{item.name}</BoldText>
                            {item.closed === null && (
                                <div>
                                    <img
                                        className="cafe"
                                        alt="cafe-icon"
                                        src="/svg/cafe.svg"
                                        width="24"
                                        height="25"
                                    />
                                </div>
                            )}
                        </RowBox>
                        <RowBox>
                            {item.closed !== null && <div>~ {item.closed}</div>}
                            {item.unmanned === true && (
                                <BoldText className="unmanned">무인</BoldText>
                            )}
                            {item.unmanned === false &&
                                item.closed === null && (
                                    <BoldText className="allday">24시</BoldText>
                                )}
                            {item.dist_meters < 1000 ? (
                                <Meter>{item.dist_meters}m</Meter>
                            ) : (
                                <Meter>
                                    {(item.dist_meters / 1000).toFixed(1)}km
                                </Meter>
                            )}
                        </RowBox>
                    </Item>
                ))
            ) : (
                <NoItem>근처에 카페가 없습니다.</NoItem>
            )}
        </Wrapper>
    );
};

export default List;
