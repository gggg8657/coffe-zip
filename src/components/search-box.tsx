import { useState } from "react";
import styled from "styled-components";

const SearchForm = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    img {
        &.search {
            cursor: pointer;
            position: absolute;
            right: 36px;
        }
        &.cancle {
            cursor: pointer;
            position: absolute;
            right: 64px;
        }
    }
`;

const Input = styled.input`
    cursor: pointer;
    font-size: 1rem;
    font-family: "Pretendard";
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    margin: 30px 20px;
    padding: 15px 24px;
    width: 100%;
    outline: none;
    border-radius: 50px;
`;

const SearchBox = () => {
    const [keyword, setKeyword] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (keyword === "") return;
    };
    const onClickIcon = () => {
        if (keyword === "") return;
    };
    const onClickCancle = () => {
        setKeyword("");
    };
    return (
        <SearchForm onSubmit={handleSubmit}>
            <Input
                onChange={onChange}
                placeholder="장소나 주소를 검색해보세요"
                type="text"
                value={keyword}
            />
            <img
                className="search"
                alt="search-icon"
                src="/svg/search.svg"
                height="20"
                width="auto"
                onClick={onClickIcon}
            />
            {keyword !== "" && (
                <img
                    className="cancle"
                    alt="cancle-icon"
                    src="/svg/cancle.svg"
                    height="20"
                    width="auto"
                    onClick={onClickCancle}
                />
            )}
        </SearchForm>
    );
};

export default SearchBox;
