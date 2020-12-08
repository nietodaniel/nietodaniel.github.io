import React from 'react';
import { withTranslation } from 'react-i18next';

const notfound = ({t,screencontext:{ screenType }}) => {
    return (
        <div>
            {t("componentworks")}
        </div>
    )
}

export default withTranslation(['notfound'])(notfound);
