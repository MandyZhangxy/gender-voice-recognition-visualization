voice = read.csv("../data/voice.csv",stringsAsFactors = FALSE)

library(tidyr)
library(ggplot2)

# Convert dataframe to key-value pairs
pair = gather(voice[, 1:20])
#plot
pdf("../figures/all_variables_density.pdf", width = 16.5, height = 9.5)
ggplot(pair, aes(value)) + facet_wrap(~ key, scales = "free") + geom_density()+
  labs(x = "feature in each column") + ggtitle("Density of all variables")+
  theme(plot.title = element_text(face = "bold", size = 18, hjust = 0.5),
        axis.title.x = element_text(face = "bold",size = 15, vjust = 1),
        axis.title.y = element_text(face = "bold", size = 15),
        axis.text.x = element_text(vjust = 0.1, hjust = 0.1)) 
dev.off()