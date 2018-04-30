from pandas import Series
from numpy import mean
from sklearn.metrics import mean_squared_error
from matplotlib import pyplot
# series = Series.from_csv('daily-total-female-births.csv', header=0)
# prepare situation
def Avg(series):
	X = series.values

	# print X
	window = len(X)-1
	history = [X[i] for i in range(window)]
	test = [X[i] for i in range(window, len(X))]
	predictions = list()
# walk forward over time steps in test
	yhat = 0
	for t in range(len(test)):
		length = len(history)
		yhat = mean([history[i] for i in range(length-window,length)])
		obs = test[t]
		predictions.append(yhat)
		history.append(obs)
		# print('predicted=%f, expected=%f' % (yhat, obs))
		# error = mean_squared_error(test, predictions)
		# print('Test MSE: %.3f' % error)
	return yhat
