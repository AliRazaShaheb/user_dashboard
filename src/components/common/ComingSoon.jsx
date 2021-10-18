import React from 'react'
import { Title } from '../../theme/Typography'
import { colors } from '../../theme/Colors'

const ComingSoon = () => {
    return (
        <div style={{textAlign:"center"}}>
            <Title 
                fontSize="6rem" 
                fontWeight="900"
                color={`${colors.grayLight}`}
                >
                    Coming Soon
                </Title>
        </div>
    )
}

export default ComingSoon
