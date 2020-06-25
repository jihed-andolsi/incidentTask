import React, { useState } from 'react'
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable'
import { 
    ExpenseViewProps 
} 
from './types'
import { 
    ExpenseViewWrapper,
    UserDataWrapper,
    OtherDataWrapper,
    ID,
    FullName,
    Email,
    Category,
    Comment,
    DateC,
    Merchant
} 
from './atoms'
import moment from 'moment'
import { primarytColor, lightColor } from '../Global/theme';

function ExpenseView(props: ExpenseViewProps) {
    const expense = props
    const { id, amount, date, merchant, user, comment, postComment, setComment } = expense
    const contentEditable = React.createRef();
    const formattedDate = moment(new Date(date)).format("MM-DD-YYYY");
    return(<ExpenseViewWrapper>
        <UserDataWrapper>
            <FullName>{user.first} {user.last}</FullName>
            <ID>{id}</ID>
        </UserDataWrapper>
        <UserDataWrapper>
            <Email>{user.email}</Email>
            <DateC>{formattedDate}</DateC>
        </UserDataWrapper>
        <OtherDataWrapper>
            <Merchant>{merchant}</Merchant>
            <div>{amount.value} {amount.currency}</div>
        </OtherDataWrapper>
        <OtherDataWrapper fullWidth={true}>
            <Comment 
                isEmpty={comment===""}
            >
                <ContentEditable
                    // @ts-ignore
                    innerRef={contentEditable}
                    html={comment}
                    disabled={false}
                    onChange={e => setComment(e.target.value)} 
                    onBlur={() => postComment(id, comment)}
                    style={{
                        padding: 6,
                        outline: 'none'
                    }}
                />
            </Comment>
        </OtherDataWrapper>
    </ExpenseViewWrapper>)
}

ExpenseView.propTypes = {
    amount: PropTypes.object,
    user: PropTypes.object
};

ExpenseView.defaultProps = {
    amount: {},
    user: {}
};

export default ExpenseView;