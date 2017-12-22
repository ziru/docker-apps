FROM fluent/fluentd:v0.14

RUN set -ex \
    && echo 'gem: --no-document' >> /etc/gemrc \
    && gem install fluent-plugin-elasticsearch \
    && gem sources --clear-all

COPY fluent.conf /fluentd/etc/fluent.conf
