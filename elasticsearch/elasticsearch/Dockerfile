FROM docker.elastic.co/elasticsearch/elasticsearch:6.0.0

# Remove the pre-bundled X-Pack plug-in
RUN /usr/share/elasticsearch/bin/elasticsearch-plugin remove x-pack

# Install Elasticsearch plug-ins
RUN /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-icu --verbose

# Overwrite the default configuration
COPY elasticsearch.yml /usr/share/elasticsearch/config/
