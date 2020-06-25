import s from 'styled-components';
import { defaultColor, primarytColor, lightColor, secondaryColor } from '../Global/theme'
import {CommentType, OtherDataWrapperType } from './types';

export const ExpenseViewWrapper = s.section`
    padding: 20px 0;
`
export const ID = s.div`
    color: ${defaultColor};
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: rtl;
    text-align: left;
`
export const FullName = s.div`
    color: ${defaultColor};
    font-weight: bold;
`
export const Email = s.div`
    color: ${defaultColor};
    font-weight: bold;
`
export const DateC = s.div`
    color: ${lightColor};
`
export const Category = s.div`
    color: ${defaultColor};
`
export const Merchant = s.div`
    color: ${defaultColor};
`
export const Amount = s.div`
    color: ${secondaryColor};
`

export const UserDataWrapper = s.div`
    display: flex;
    justify-content: space-between;
`
export const Comment = s.div<CommentType>`
    color: ${secondaryColor};
    padding: 35px;
    margin: 10px 0;
    border: ${p => p.isEmpty ? 
        `1px dashed ${secondaryColor}` : `1px solid ${secondaryColor}`};
    width: 100%;
    text-align: center;
`
export const OtherDataWrapper = s.div<OtherDataWrapperType>`
    display: flex;
    justify-content: ${p => p.fullWidth ? 'center' : 'space-between'} ;
`