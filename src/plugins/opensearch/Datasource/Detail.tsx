import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';

interface Props {
  data: any;
}
export default function Index(props: Props) {
  const { t } = useTranslation('datasourceManage');
  const { data } = props;

  return (
    <div>
      <div className='page-title'>HTTP</div>
      <div className='flash-cat-block'>
        <Row gutter={16}>
          {_.map(_.get(data, ['settings', 'os.nodes']), (el, index) => (
            <Fragment key={index}>
              <Col span={4}>URL：</Col>
              <Col span={20} className='second-color'>
                {el}
              </Col>
            </Fragment>
          ))}
        </Row>
      </div>
      <div className='page-title'>{t('form.auth')}</div>
      <div className='flash-cat-block'>
        <Row gutter={16}>
          <Col span={12}>{t('form.username')}：</Col>
          <Col span={12}>{t('form.password')}：</Col>
          <Col span={12} className='second-color'>
            {_.get(data, ['settings', 'os.basic', 'os.user']) || '-'}
          </Col>
          <Col span={12} className='second-color'>
            {_.get(data, ['settings', 'os.basic', 'os.password']) ? '******' : '-'}
          </Col>
        </Row>
      </div>
      {!_.isEmpty(data?.http?.headers) && (
        <>
          <div className='page-title'>{t('form.headers')}</div>
          <div className='flash-cat-block'>
            <Row gutter={16}>
              {_.map(data?.http?.headers, (val, key) => {
                return (
                  <Col key={key} span={24}>
                    {key + ' : ' + val}
                  </Col>
                );
              })}
            </Row>
          </div>
        </>
      )}
      <div className='page-title'>{t('form.os.title')}</div>
      <div className='flash-cat-block'>
        <Row gutter={16}>
          <Col span={8}>{t('form.es.version')}：</Col>
          <Col span={8}>{t('form.es.max_shard')}：</Col>
          <Col span={8}>{t('form.es.min_interval')}：</Col>
          <Col span={8} className='second-color'>
            {data.settings?.['os.version'] || '-'}
          </Col>
          <Col span={8} className='second-color'>
            {data.settings?.['os.max_shard'] || '-'}
          </Col>
          <Col span={8} className='second-color'>
            {data.settings?.['os.min_interval'] || '-'}
          </Col>
        </Row>
      </div>
      <div className='page-title'>{t('form.other')}</div>
      <div className='flash-cat-block'>
        <Row gutter={16}>
          <Col span={24}>{t('form.cluster')}：</Col>
          <Col span={24} className='second-color'>
            {data?.settings?.['os.cluster_name'] || '-'}
          </Col>
        </Row>
      </div>
    </div>
  );
}
