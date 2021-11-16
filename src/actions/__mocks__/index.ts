import  React from 'react';
module.exports={
    ...jest.requireActual('...'),
    _esModule:true,
    getSerectWord:jest.fn().mockReturnValue(Promise.resolve('party'))
}