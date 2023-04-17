
const extractBoolean = (value: string) => {  
  if (value === 'true') {
    return true;
  } else if (value === 'false') {
    return false;
  } else {
    return value;
  }
}

const setValueInPayload = (value: string, onlyString: boolean) => {
  return {
    type: 'const',
    payload: {
      value: onlyString? value: extractBoolean(value)
    }
  };
}

const structureJson = (data: any) => {
  let response = {type: data.type, payload: {}};
  switch (data.type) {
    case 'and':
      response.payload = {
        expressions: [
          setValueInPayload(data.andInp1, false),
          setValueInPayload(data.andInp2, false),
        ]
      };
      break;
    case 'or':
      response.payload = {
        expressions: [
          setValueInPayload(data.orInp1, false),
          setValueInPayload(data.orInp2, false),
        ]
      };
      break;
    case 'not':
      response.payload = {
        expression: setValueInPayload(data.notInp1, false),
      };
      break;
    case 'const':
      response.payload = {
        value: extractBoolean(data.constInp1)
      };
      break;
    case 'eq':
      response.payload = {
        left: setValueInPayload(data.eqInp1, true),
        right: setValueInPayload(data.eqInp2, true),
      };
      break;
    case 'tl':
      response.type = 'to-lower';
      response.payload = {
        value: setValueInPayload(data.tlInp1, true),
      };
      break;
    case 'tu':
      response.type = 'to-upper';
      response.payload = {
        value: setValueInPayload(data.tuInp1, true),
      };
      break;
    case 'if':
      response.payload = {
        test_expression: setValueInPayload(data.ifInp1, false),
        if_true: setValueInPayload(data.ifInp2, false),
        if_false: setValueInPayload(data.ifInp3, false)
      };
      break;
    default:
      break;
  }
  return JSON.stringify(response, null, 4);
}

export default structureJson;
